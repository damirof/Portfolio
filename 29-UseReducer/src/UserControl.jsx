import React, { useReducer, useState } from 'react';

const initialState = {
  users: [],
};

function userReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    case 'RESET_USERS':
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function UserManagementSystem() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [formData, setFormData] = useState({ name: '', surname: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = e => {
    const { name, value } = e.target;
    setEditingUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = e => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.surname.trim()) {
      alert('Please enter both name and surname');
      return;
    }
    
    const newUser = {
      id: Date.now(),
      ...formData,
    };
    
    dispatch({ type: 'ADD_USER', payload: newUser });
    setFormData({ name: '', surname: '' });
  };

  const openEditModal = user => {
    setEditingUser({...user});
    setIsModalOpen(true);
  };

  const handleUpdateUser = e => {
    e.preventDefault();
    if (!editingUser.name.trim() || !editingUser.surname.trim()) {
      alert('Please enter both name and surname');
      return;
    }
    dispatch({ type: 'UPDATE_USER', payload: editingUser });
    setIsModalOpen(false);
  };

  const handleDeleteUser = id => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch({ type: 'DELETE_USER', payload: id });
    }
  };

  const handleResetUsers = () => {
    if (window.confirm('Are you sure you want to delete all users?')) {
      dispatch({ type: 'RESET_USERS' });
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: 'gray', borderRadius: '8px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <h1>User Management System</h1>
      
      <form onSubmit={handleAddUser} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Add User</button>
      </form>
      
      <button 
        onClick={handleResetUsers} 
        style={{ 
          padding: '5px 10px',
          marginBottom: '20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Reset All Users
      </button>
      
      <div>
        {state.users.length === 0 ? (
          <p>No users added yet</p>
        ) : (
          state.users.map(user => (
            <div 
              key={user.id} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                borderRadius: '4px'
              }}
            >
              <p>{user.name} {user.surname}</p>
              <div>
                <button 
                  onClick={() => openEditModal(user)}
                  style={{ marginRight: '10px', padding: '3px 8px' }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteUser(user.id)}
                  style={{ padding: '3px 8px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px'
          }}>
            <h2>Edit User</h2>
            <form onSubmit={handleUpdateUser}>
              <input
                type="text"
                name="name"
                value={editingUser.name}
                onChange={handleEditInputChange}
                style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
              />
              <input
                type="text"
                name="surname"
                value={editingUser.surname}
                onChange={handleEditInputChange}
                style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  style={{ marginRight: '10px', padding: '5px 10px' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  style={{ padding: '5px 10px' }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserManagementSystem;
  