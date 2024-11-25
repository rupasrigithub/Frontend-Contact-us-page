import React from 'react';
import { Menu, Search, PenSquare, Moon, LogIn } from 'lucide-react';
import {
  HeaderWrapper,
  Logo,
  HeaderActions,
  SearchBar,
  IconButton
} from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <Menu className="menu-icon" size={20} />
        <span>IndiaBIX</span>
      </Logo>
      
      <HeaderActions>
        <SearchBar>
          <input type="text" placeholder="Search" />
          <Search size={16} />
        </SearchBar>
        <IconButton>
          <PenSquare size={20} />
        </IconButton>
        <IconButton>
          <Moon size={20} />
        </IconButton>
        <IconButton>
          <LogIn size={20} />
        </IconButton>
      </HeaderActions>
    </HeaderWrapper>
  );
}

