import React, { useState } from 'react';
import InputGroup from './InputGroup';
import "../styles/TagInput.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function TagInput({ tags, addTag, removeTag }) {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            if (inputValue) {
                addTag(inputValue);
                setInputValue('');
            }
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <div className="tags-input-container">
                <InputGroup
                    id="tag-input"
                    placeholder="Programming 101"
                    type="text"
                    labelText="Relevant Modules (max 4)"
                    onChange={handleInputChange}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
                {tags.map((tag, index) => (
                    <div key={index} className="tag-item" >
                    {tag}
                    <button type="button" onClick={() => removeTag(index)}><FontAwesomeIcon icon={faX} /></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TagInput;
