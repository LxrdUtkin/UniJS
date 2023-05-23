import React, { useState } from 'react';

function CheckboxSelect() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectValue, setSelectValue] = useState('не позначено');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);

    if (value === 'позначено') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (isChecked) {
      setSelectValue('не позначено');
    } else {
      setSelectValue('позначено');
    }
  };

  return (
    <div>
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="позначено">позначено</option>
        <option value="не позначено">не позначено</option>
      </select>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
    </div>
  );
}

export default CheckboxSelect;
