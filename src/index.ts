import { checkCookie } from "./cookies/locator";
import { clickButton } from "./elements/button/click";
import { getButton, getButtonPartialMatch } from "./elements/button/locator";
import { clickHeading } from "./elements/heading/click";
import { getHeading,getHeadingPartialMatch, getHeadingLink } from "./elements/heading/locator";
import { getIdLink } from "./elements/id/locator";
import { getImage } from "./elements/image/locator";
import { clickLabel } from "./elements/label/click";
import { getLabel, getLabelPartialMatch } from "./elements/label/locator";
import { clickLink } from "./elements/link/click";
import { hoverLink,hoverLinkPartialMatch } from "./elements/link/hover";
import { getLink, getLinkHeading, getLinkHeadingPartialMatch, getLinkWithId } from "./elements/link/locator";
import { scrollToThisLink } from "./elements/link/scroll";
import { getRadioTestIdIsChecked, getRadioTestIdNotChecked } from "./elements/radio/locator";
import { getSearchBarByPlaceholder } from "./elements/searchBar/locator";
import { getTableCellText } from "./elements/table/locator";
import { getTestIdWithAttribute } from "./elements/testId/attribute";
import { clickTestId, clickTestIdWithText } from "./elements/testId/click";
import { getElementCountByTestId, checkElementCountByTestIdIsNotMoreThanX, checkElementCountByTestIdIsMoreThanOrEqualToX } from "./elements/testId/count";
import { fillIdWithText } from "./elements/testId/fill";
import { getAllTestIdElementsWithText, getTestId, getTestIdElementWithText, getTestIdIsHidden, getTestIdRadioIsChecked, getTestIdRadioNotChecked, getTestIdText, getTestIdWithClass } from "./elements/testId/locator";
import { clickText, clickTextPartialMatch } from "./elements/text/click";
import { hoverText,hoverTextPartialMatch } from "./elements/text/hover";
import { getText, getTextPartialMatch } from "./elements/text/locator";
import { scrollToThisText } from "./elements/text/scroll";
import { isTabletScreen, isMobileScreen } from "./screenSize/screenSize";
import { commonAfterEach } from "./setup/afterEach";
import { commonBeforeEach, beforeEachAcceptCookies } from "./setup/beforeEach";

export { 
    getText, 
    getTextPartialMatch, 
    hoverText, 
    hoverTextPartialMatch, 
    clickText,
    clickTextPartialMatch,
    getHeading, 
    getHeadingPartialMatch, 
    getHeadingLink, 
    clickHeading,
    clickLink,
    getLink,
    getLinkHeading,
    getLinkHeadingPartialMatch,
    getLinkWithId,
    hoverLink, 
    hoverLinkPartialMatch,
    getButton,
    getButtonPartialMatch,
    clickButton,
    getIdLink,
    getImage,
    getTableCellText,
    getSearchBarByPlaceholder,
    fillIdWithText,
    getRadioTestIdIsChecked,
    getRadioTestIdNotChecked,
    getLabel,
    getLabelPartialMatch,
    clickLabel,
    getTestId,
    getTestIdText,
    getTestIdElementWithText,
    getAllTestIdElementsWithText,
    clickTestId,
    clickTestIdWithText,
    getTestIdWithAttribute,
    scrollToThisText,
    scrollToThisLink,
    getTestIdIsHidden,
    getTestIdWithClass,
    getTestIdRadioIsChecked,
    getTestIdRadioNotChecked,
    getElementCountByTestId,
    checkElementCountByTestIdIsNotMoreThanX,
    checkElementCountByTestIdIsMoreThanOrEqualToX,
    checkCookie,
    commonBeforeEach,
    beforeEachAcceptCookies,
    commonAfterEach,
    isTabletScreen,
    isMobileScreen
};
