// import { useState } from "react";

// const DaysBetween:React.FC = () => {
//     const [ startDate, setStartDate ] = useState<string>('');
//     const [ endDate, setEndDate ] = useState<string>('');
//     const [difference, setDifference] = useState<number>(0);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const start = new Date(startDate);
//         const end = new Date(endDate);
//         const diffInDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
//         setDifference(diffInDays);
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />
//         </label>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </label>
//         <button type="submit">Calculate</button>
//       </form>
//       {difference > 0 && <p>There are {difference} days between the two dates</p>}
//     </div>
//   )
// }

// export default DaysBetween
import { useState } from "react";

const DaysBetween: React.FC = () => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [difference, setDifference] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffInDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        setDifference(diffInDays);
    }

    return (
        <div className="w-full max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Date Difference Calculator
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Date:
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm "
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Date:
                        </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Calculate
                </button>
            </form>
            
            {difference > 0 && (
                <div className="mt-6 p-4 bg-green-50 rounded-md border border-green-200">
                    <p className="text-center text-green-800 font-medium">
                        There are <span className="font-bold">{difference}</span> days between the two dates
                    </p>
                </div>
            )}
        </div>
    );
}

export default DaysBetween;