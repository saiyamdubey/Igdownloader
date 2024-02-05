// // components/YourComponent.tsx
// import { useState } from 'react';

// async function downloadReel(url: string) {
//   try {
//     const response = await fetch(`/api/download?url=${encodeURIComponent(url)}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error downloading reel:', error);
//   }
// }

// function YourComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleDownload = () => {
//     downloadReel(inputValue);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter Instagram Reel URL"
//       />
//       <button onClick={handleDownload}>Download</button>
//     </div>
//   );
// }

// export default YourComponent;
