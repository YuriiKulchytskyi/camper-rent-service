import { Route, Routes } from 'react-router-dom';
import { Layout } from './SharedLayout/Layout';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';
import { HomePage } from 'pages/HomePage/HomePage';
import { Feature } from './Features/Feature';
import { ReviewCard } from './Reviews/ReviewCard';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="/catalog/features" element={<Feature />} />
          <Route path="/catalog/reviews" element={<ReviewCard />} />
        </Route>
        <Route path="/favorites" element={<FavoritePage />}>
          <Route path="/favorites/features" element={<Feature />} />
          <Route path="/favorites/reviews" element={<ReviewCard />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
