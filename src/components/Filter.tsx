import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface FilterProps {
  onChange: (value: string, field: string) => void;
  options: { label: string; value: string }[];
}

const Filter: React.FC<FilterProps> = ({ onChange, options }) => {
  return (
    <>
      <Select
        style={{ width: 150 }}
        onChange={(value) => onChange(value, 'filter')}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {/* <Input style={{ width: 200 }} placeholder="Digite aqui" /> */}
    </>
  );
};

export default Filter;
