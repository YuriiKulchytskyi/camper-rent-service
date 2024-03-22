import { List } from './List/List';
import datebase from '../db/datebase.json';
import { VehicleType } from './SideMenu/Vehicle/VehicleType';
import { VehicleEquipment } from './SideMenu/Vehicle/VehicleEquipment';
import { MainWrapper, SideFilters, Container, CardHolder } from './App.styled';
import { Location } from './SideMenu/Location/Location';
import { Filters } from './App.styled';
import { LocationTitle } from './SideMenu/Location/Location.styled';
import { Button } from './SideMenu/Button/Button';
// import { ModalCard } from './Card/ModalCard/ModalCard';
// import { Modal } from './Modal/Modal';
// import { FeaturesOptions } from './Features/FeaturesOptions/FeaturesOptions';


export const App = () => {
  return (
    <Container>
      <MainWrapper>
        <SideFilters>
          <Location />
          <Filters>
            <LocationTitle>Filters</LocationTitle>
            <VehicleEquipment />
            <VehicleType />
          </Filters>
          <Button />
        </SideFilters>
        <CardHolder>
          <List datebase={datebase} />
        </CardHolder>
      </MainWrapper>
    </Container>
  );
};
