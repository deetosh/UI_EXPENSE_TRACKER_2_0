import React, {useState} from "react";

const DButton = (
    {text, onClick, buttonClass='', textColor='text-white', buttonColor='bg-blue-300 hover:bg-blue-500 active:bg-blue-700'}
) => {
    return (
        <button
            onClick={onClick}
            className={`${buttonClass} ${textColor} ${buttonColor} min-w-30 min-h-10 px-6 py-2 font-bold rounded-3xl transition-all duration-300`}
        >
            {text}
        </button>
    )
}

export default DButton;