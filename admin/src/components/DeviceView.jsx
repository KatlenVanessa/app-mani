import React from 'react';
import Markdown from 'markdown-to-jsx';

const DeviceView = ({ visible, thumbnail, title, content, onClose }) => {
  if (!visible) {
    return null;
  }

  const handleOnClick = (e) => {
    if (e.target.id === 'container') {
      onClose();
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%', // Ocupa toda a largura da tela
    height: '100%', // Ocupa toda a altura da tela
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: 'white',
    width: '60%', // Largura do modal
    padding: '20px',
    borderRadius: '8px', // Bordas arredondadas
    textAlign: 'center', // Centraliza o conteúdo no modal
    position: 'relative',
    overflowY: 'auto', // Adiciona uma barra de rolagem vertical
    maxHeight: '80vh', // Altura máxima do modal para evitar rolagem total da página
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    color: 'yellow', // Cor do ícone do botão de fechar
  };

  return (
    <div id='container' onClick={handleOnClick} style={containerStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          Fechar
        </button>
        <img src={thumbnail} className='w-full aspect-video' alt='' />
        <h1 className='font-semibold text-gray-700 text-xl py-2'>{title}</h1>
        <div className='prose prose-sm'></div>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};

export default DeviceView;
