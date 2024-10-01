import React from 'react';

function CountdownTimer() {
    return (
        <div className="flex text-[14px] font-semibold gap-2">
            {['02', '18', '39', '39'].map((time, index) => (
                <span
                    key={index}
                    className="flex items-center justify-center min-w-[40px] md:min-w-[45px] min-h-[30px] md:min-h-[30px] bg-red-600 text-white rounded p-1"
                >
          {time}
        </span>
            ))}
        </div>
    );
}

export default CountdownTimer;
