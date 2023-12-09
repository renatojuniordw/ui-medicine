import React from 'react';
import { Button } from 'antd';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      Pesquisar
    </Button>
  );
};

export default SearchButton;
