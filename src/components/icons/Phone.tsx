import React from 'react';

interface PhoneProps {
  className: string;
}

const Phone = ({ className } : PhoneProps) => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.7071 11.7071L17.3552 14.3552C17.7113 14.7113 17.7113 15.2887 17.3552 15.6448C15.43 17.57 12.3821 17.7866 10.204 16.153L8.62857 14.9714C6.88504 13.6638 5.33622 12.115 4.02857 10.3714L2.84701 8.79601C1.21341 6.61788 1.43001 3.56999 3.35523 1.64477C3.71133 1.28867 4.28867 1.28867 4.64477 1.64477L7.29289 4.29289C7.68342 4.68342 7.68342 5.31658 7.29289 5.70711L6.27175 6.72825C6.10946 6.89054 6.06923 7.13846 6.17187 7.34373C7.35853 9.71706 9.28294 11.6415 11.6563 12.8281C11.8615 12.9308 12.1095 12.8905 12.2717 12.7283L13.2929 11.7071C13.6834 11.3166 14.3166 11.3166 14.7071 11.7071Z"
        stroke="#DED9D5" strokeWidth="2" />
    </svg>
  );
}

export default Phone;