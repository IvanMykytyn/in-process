import { FC } from "react";
import { Button } from "components";

// styles
import scss from "./settings.module.scss";

interface SectionButtonsProps {
  isLoading?: boolean;
  handleCancel?: () => void;
  submitText?: string;
  resetBtnType?: "button" | "reset" | "submit" | undefined;
}

const SectionButtons: FC<SectionButtonsProps> = ({
  isLoading,
  handleCancel,
  submitText = "Save",
  resetBtnType = "reset",
}) => {
  return (
    <div className={scss["section__buttons"]}>
      <div>
        <Button type='submit' loading={isLoading}>
          {submitText}
        </Button>
        <Button type={resetBtnType} disabled={isLoading} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export { SectionButtons };
