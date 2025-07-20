export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store OTPs with expiration (5 minutes)
const otpStore = new Map<string, { otp: string; expiry: number }>();

export function storeOTP(email: string, otp: string) {
  const expiry = Date.now() + 5 * 60 * 1000; // 5 minutes from now
  otpStore.set(email, { otp, expiry });
}

export function verifyOTP(email: string, otp: string): boolean {
  const stored = otpStore.get(email);
  if (!stored) return false;
  
  // Check if OTP is expired
  if (Date.now() > stored.expiry) {
    otpStore.delete(email);
    return false;
  }
  
  // Check if OTP matches
  const isValid = stored.otp === otp;
  if (isValid) {
    otpStore.delete(email); // Delete OTP after successful verification
  }
  
  return isValid;
}
