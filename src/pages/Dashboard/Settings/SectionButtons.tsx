import { FC } from 'react';
import { Button } from 'components';

// styles
import scss from './settings.module.scss';

interface SectionButtonsProps {
  isLoading?: boolean;
}

const SectionButtons: FC<SectionButtonsProps> = ({ isLoading }) => {
  return (
    <div className={scss['section__buttons']}>
      <div>
        <Button type="submit" variant="contained" loading={isLoading}>
          Save
        </Button>
        <Button type="reset" disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export { SectionButtons };
