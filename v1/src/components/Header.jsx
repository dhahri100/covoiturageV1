import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Covoiturage Express</h1>
        <nav className="space-x-4">
          <a href="#" className="text-white hover:underline">Accueil</a>
          <a href="#" className="text-white hover:underline mr-4">Trajets</a>
          <a href="#" className="text-white hover:underline">Profil</a>
          <a href="#" className="text-white hover:underline">Déconnexion</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
