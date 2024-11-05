import React, { useEffect, useState } from 'react';
import { database } from '../../firebase'; // Adjust the path to where your firebase.js is located
import { ref, onValue } from 'firebase/database';

const ItemListPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = ref(database, 'users');
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setItems(itemsArray);
        console.log(itemsArray);
      } else {
        setItems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">All Users</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <img 
                src={item.picurl} 
                alt={item.fullName} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-medium text-gray-800">{item.fullName}</h2>
                <p className="text-sm text-gray-500">{item.emailid}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600"><span className="font-semibold">Address:</span> {item.address}</p>
              <p className="text-gray-600"><span className="font-semibold">Contact:</span> {item.contactNumbers}</p>
              <p className="text-gray-600"><span className="font-semibold">10th Passing Year:</span> {item.tenthPassingYear}</p>
              <p className="text-gray-600"><span className="font-semibold">12th Passing Year:</span> {item.twelfthPassingYear || "N/A"}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href={item.aadhaarurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Aadhaar Document
              </a>
              <a
                href={item.tenthCertificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                10th Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListPage;