import React, { useState } from 'react';
import InputGroup from './InputGroup';
import "../styles/TagInput.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
                    maxLength={35}
                />
                <div className="tags-container">
                    {tags.map((tag, index) => (
                    <div key={index} className="tag-item">
                    {tag}
                        <div className="tag-delete" onClick={() => removeTag(index)} style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '8px' }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default TagInput;
