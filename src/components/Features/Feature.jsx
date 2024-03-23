import { FeatureDetails } from './Details/FeatureDetails';
import { FeatureContainer } from './Feature.syled';
import { FeaturesOptions } from './FeaturesOptions/FeaturesOptions';

export const Feature = ({ item }) => {
  return (
    <FeatureContainer>
      <FeaturesOptions item={item} />
      <FeatureDetails item={item} />
    </FeatureContainer>
  );
};
