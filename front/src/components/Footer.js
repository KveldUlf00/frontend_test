import PopupButton from "./reusable/PopupButton";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import messages from "../data/messages.json";

const Footer = ({ setShowName, setIsTextToReset }) => {
  const { enqueueSnackbar } = useSnackbar();

  const popUpOptions = [
    { value: 0, label: "zresetuj ustawienia" },
    { value: 1, label: "pokaż dane osobowe" },
  ];

  const handleSelect = (value) => {
    if (value) {
      setShowName(true);
      enqueueSnackbar(messages.showUserData, {
        variant: "success",
      });
    } else {
      setIsTextToReset(true);
      enqueueSnackbar(messages.resetConfig, {
        variant: "success",
      });
    }
  };

  return (
    <div className="container__footer">
      <div className="footer_block">
        <div className="cssDiv">
          <div className="border"></div>
          <div className="content">
            <span>CSS</span>
            <span>is</span>
            <span>awesome</span>
          </div>
        </div>
      </div>
      <div className="footer_block">
        <div className="company-name">
          <span>nabthat</span>
        </div>
      </div>

      <div className="footer_block">
        <PopupButton options={popUpOptions} onSelect={handleSelect} />
      </div>
    </div>
  );
};

Footer.propTypes = {
  setShowName: PropTypes.func.isRequired,
  setIsTextToReset: PropTypes.func.isRequired,
};

export default Footer;
