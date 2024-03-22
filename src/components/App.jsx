import { Route, Routes } from 'react-router-dom';
// import HomePage from '../pages/HomePage/HomePage';
// import Layout from './Layout/Layout';
// import CatalogPage from '../pages/CatalogPage/CatalogPage';
// import FavoritePage from '../pages/FavoritePage/FavoritePage';
import { Layout } from './SharedLayout/Layout';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';
import { HomePage } from 'pages/HomePage/HomePage';
// import { FeatureDetails } from './Features/Details/FeatureDetails';
import { Feature } from './Features/Feature';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="/catalog/features" element={<Feature />} />
          <Route path="/catalog/reviews" element={<h2>World</h2>} />
        </Route>
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
