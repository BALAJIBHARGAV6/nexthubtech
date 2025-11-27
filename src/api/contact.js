// Mock API endpoint for contact form
// This would typically be handled by a backend server
export const handleContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate validation
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('Please fill in all required fields');
  }
  
  // Simulate email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Please enter a valid email address');
  }
  
  // Simulate successful submission
  console.log('Contact form submission:', formData);
  
  // In a real application, you would send this data to your backend
  // For now, we'll just return success
  return { success: true, message: 'Message sent successfully!' };
};



