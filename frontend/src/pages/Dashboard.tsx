/**
 * Propriété exclusive de RAKOTOAHIJOHN Tsioritiana Ryan - Tous droits réservés
 */
import { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="mt-2 text-gray-600">Gérez votre academy de beauté</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-pink-100 rounded-full">
                <span className="text-2xl">📚</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Formations</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Étudiants</p>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Revenu (mois)</p>
                <p className="text-2xl font-bold text-gray-900">€12,450</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Note moyenne</p>
                <p className="text-2xl font-bold text-gray-900">4.8/5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Aperçu
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'courses'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Formations
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`pb-3 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'users'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Utilisateurs
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Activité récente</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✅</span>
                    <div>
                      <p className="font-medium text-gray-900">Nouvelle inscription</p>
                      <p className="text-sm text-gray-500">Marie Martin a rejoint la formation Microblading</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Il y a 2h</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⭐</span>
                    <div>
                      <p className="font-medium text-gray-900">Nouvel avis</p>
                      <p className="text-sm text-gray-500">5 étoiles pour la formation Prothésiste Ongulaire</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">Il y a 5h</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Gestion des formations</h2>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium">
                  + Ajouter une formation
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Prothésiste Ongulaire</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ongles</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€300</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Disponible</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Gestion des utilisateurs</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inscrit le</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Marie Martin</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">marie@example.com</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Étudiant</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12/05/2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
