// Input validation and sanitization utilities

// Email validation (RFC 5322 compliant)
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Common disposable email domains (expand as needed)
const DISPOSABLE_DOMAINS = [
  'tempmail.com', 'guerrillamail.com', '10minutemail.com',
  'throwaway.email', 'mailinator.com', 'trashmail.com',
  'yopmail.com', 'temp-mail.org', 'getnada.com'
];

export function isDisposableEmail(email) {
  if (!email) return false;
  const domain = email.split('@')[1]?.toLowerCase();
  return DISPOSABLE_DOMAINS.includes(domain);
}

// Sanitize text input (remove potential XSS)
export function sanitizeText(text, maxLength = 1000) {
  if (!text || typeof text !== 'string') return '';

  return text
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers like onclick=
}

// Phone number validation (flexible international format)
export function isValidPhone(phone) {
  if (!phone) return true; // Optional field
  if (typeof phone !== 'string') return false;

  // Allow digits, spaces, +, -, (, )
  const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 7 && phone.length <= 20;
}

// Name validation (no special characters)
export function isValidName(name) {
  if (!name || typeof name !== 'string') return false;
  if (name.length < 2 || name.length > 100) return false;

  // Allow letters, spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-Z\s\-\'\.]+$/;
  return nameRegex.test(name);
}

// Check for spam patterns
export function containsSpam(text) {
  if (!text) return false;

  const spamPatterns = [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /lottery/i,
    /winner/i,
    /\$\$\$/,
    /click here/i,
    /buy now/i,
    /limited offer/i,
    /(http|https):\/\/.*\.(ru|cn)$/i, // Suspicious TLDs
    /\b(earn|make)\s+\$?\d+\s+(dollars|per|day)/i,
  ];

  return spamPatterns.some(pattern => pattern.test(text));
}

// Check if message is too short (likely spam)
export function isMessageTooShort(message) {
  if (!message) return true;
  const words = message.trim().split(/\s+/);
  return words.length < 3;
}

// Check for excessive links (spam indicator)
export function hasExcessiveLinks(text) {
  if (!text) return false;
  const urlRegex = /(http|https):\/\/[^\s]+/g;
  const matches = text.match(urlRegex);
  return matches && matches.length > 3;
}

// Validate entire contact form payload
export function validateContactForm(data) {
  const errors = [];

  // Required fields
  if (!data.fullName || !isValidName(data.fullName)) {
    errors.push('Invalid name. Use only letters, spaces, and hyphens.');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Invalid email address.');
  }

  if (data.email && isDisposableEmail(data.email)) {
    errors.push('Disposable email addresses are not allowed.');
  }

  // Optional but validated if present
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Invalid phone number format.');
  }

  if (data.organization && data.organization.length > 200) {
    errors.push('Organization name too long.');
  }

  // Message validation
  if (!data.message) {
    errors.push('Message is required.');
  } else {
    if (isMessageTooShort(data.message)) {
      errors.push('Message too short. Please provide more details.');
    }

    if (data.message.length > 5000) {
      errors.push('Message too long. Maximum 5000 characters.');
    }

    if (containsSpam(data.message) || containsSpam(data.fullName)) {
      errors.push('Your message contains prohibited content.');
    }

    if (hasExcessiveLinks(data.message)) {
      errors.push('Too many links in message. Maximum 3 links allowed.');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
