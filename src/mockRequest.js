export const mockRequest = ({ returnValue, delay = 5000, error = false }) => {
    const request = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject(returnValue);
        } else {
          resolve(returnValue);
        }
      }, delay);
    });
  
    return request;
  };