import { MenuItem, Select } from '@mui/material';
import { getLocale, setLocale } from '../../helpers/locale';

function Locale() {
  const handleMenuItemClick = (value: string) => {
    setLocale(value);
  };

  return (
    <Select autoWidth sx={{ height: '1.75rem', fontSize: '0.688rem' }} value={getLocale()}>
      <MenuItem value={'ko-KR'} sx={{ fontSize: '0.688rem' }} onClick={() => handleMenuItemClick('ko-KR')}>
        한국어
      </MenuItem>
      <MenuItem value={'en-US'} sx={{ fontSize: '0.688rem' }} onClick={() => handleMenuItemClick('en-US')}>
        English
      </MenuItem>
    </Select>
  );
}

export default Locale;
