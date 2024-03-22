import { Filters, SideFilters } from "components/App.styled";
import { Location } from "./Location/Location";
import { LocationTitle } from "./Location/Location.styled";
import { VehicleEquipment } from "./Vehicle/VehicleEquipment";
import { VehicleType } from "./Vehicle/VehicleType";
import { Button } from "./Button/Button";

export const SideMenu = () => {
    return (
      <>
        <SideFilters>
          <Location />
          <Filters>
            <LocationTitle>Filters</LocationTitle>
            <VehicleEquipment />
            <VehicleType />
          </Filters>
          <Button />
        </SideFilters>
      </>
    );

}