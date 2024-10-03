/* eslint-disable react/prop-types */
import { MdEditSquare, MdOutlineCancelPresentation } from "react-icons/md";

const Home = ({ handleLogout }) => {
  return (
    <div className="p-6 text-[20px]">
      {/* First row with search, cancel, and category button */}
      {/* Retour button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => handleLogout()}
          className=" bg-yellow-900 text-white pl-10 pt-3 px-4 py-2 rounded-lg hover:bg-yellow-950"
        >
          Retour
        </button>
      </div>
      <div className="flex justify-between mb-16">
        <div className="flex space-x-4">
          {/* Category Button */}
          <button
            style={{ border: "2px solid black" }}
            className="border pr-[12em]  rounded-[12px] px-4 py-2"
          >
            Catégorie
          </button>
          {/* Buttons */}
          <button className="bg-teal-600 text-white pl-10 pt-3 px-4 py-2 rounded-lg hover:bg-teal-700">
            Rechercher
          </button>
          <button className="bg-teal-600 text-white pl-11 pt-3 px-4 py-2 rounded-lg hover:bg-teal-700">
            Annuler
          </button>
        </div>

        <div className="flex space-x-4">
          {/* Category Button */}
          <button
            style={{ border: "2px solid black" }}
            className="border pr-[12em]  rounded-[12px] px-4 py-2 "
          >
            Catégorie
          </button>
          {/* Buttons */}
          <button className="bg-teal-600 text-white pl-11 pt-3 px-4 py-2 rounded-lg hover:bg-teal-700">
            Enregistrer
          </button>
          <button className="bg-teal-600 text-white pl-10 pt-3 px-4 py-2 rounded-lg hover:bg-teal-700">
            Annuler
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full text-[16px] font-semibold">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-800 text-gray-500 text-left">
              <th className="py-2 px-4">Catégories produits</th>
              <th
                className="py-2 px-4"
                style={{ borderLeft: "1px solid gray" }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">
                Copieurs, imprimantes & multifonctions
              </td>
              <td className="py-2 px-4 flex">
                <MdEditSquare className="text-green-600 hover:text-green-800 w-8 h-8 mr-3" />
                <MdOutlineCancelPresentation className="text-red-600 hover:text-red-800 w-8 h-8 mr-3" />
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">
                Smartphone, Tablette, PC, Laptop, PDA
              </td>
              <td className="py-2 px-4 flex">
                <MdEditSquare className="text-green-600 hover:text-green-800 w-8 h-8 mr-3" />
                <MdOutlineCancelPresentation className="text-red-600 hover:text-red-800 w-8 h-8 mr-3" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
