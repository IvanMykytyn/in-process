import { FC } from 'react';
import { Button } from 'components';

// styles
import scss from './settings.module.scss';

interface SectionButtonsProps {
  isLoading?: boolean;
  handleCancel?: () => void;
}

const SectionButtons: FC<SectionButtonsProps> = ({ isLoading, handleCancel }) => {
  return (
    <div className={scss['section__buttons']}>
      <div>
        <Button type="submit" loading={isLoading}>
          Save
        </Button>
        <Button type="reset" disabled={isLoading} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export { SectionButtons };
