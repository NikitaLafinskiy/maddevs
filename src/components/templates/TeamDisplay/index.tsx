import { Icons, PersonalLink, Sticky } from "components/modules";
import { Text } from "components/elements";
import "./TeamDisplay.scss";

function TeamDisplay() {
  return (
    <div className='templates__team-display'>
      <Sticky isNav={false}>MadDevs</Sticky>
      <Icons />
      <Text>
        <div>
          <div>
            By clicking on the blocks below you will be given the opportunity to
            view in detail information about each aspect of our work.
          </div>
          <div>Enjoy!</div>
        </div>
      </Text>
      <PersonalLink />
    </div>
  );
}

export default TeamDisplay;
