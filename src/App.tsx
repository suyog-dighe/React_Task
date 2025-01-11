import React, { useState } from 'react';
import { PlusCircle, ListTodo } from 'lucide-react';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <ListTodo className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Item List Manager</h1>
          </div>

          {/* Input Section */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a new item..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors flex items-center space-x-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Add Item</span>
            </button>
          </div>

          {/* List Section */}
          <div className="border rounded-lg">
            {items.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No items yet. Add your first item above!</p>
              </div>
            ) : (
              <ul className="divide-y">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;