const ConnectionTools = () => {
  return (
    <div className="flex justify-center pt-2">
      <div className="px-5 flex">
        <a href="https://www.linkedin.com/in/kavita-tripathi-74a064205/" aria-label="linkedIn" target="_blank">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-icon-svg-download-png-1239440.png?f=webp&w=512"
            width="30"
            height="30"
            className="p-1 rounded-xl hover:shadow-lg hover:shadow-gray-500"
            alt="linkedIn"
          />
        </a>
        <a href="mailto:kavitatripathi1998@gmail.com" aria-label="mail" target="_blank">
          <img
            src="http://cdn.iconscout.com/icon/free/png-512/free-mail-icon-svg-download-png-1513567.png?f=webp&w=512"
            width="30"
            height="30"
            className="p-1 rounded-xl hover:shadow-lg hover:shadow-gray-500"
            alt="mail"
          />
        </a>
        <a href="https://github.com/kavitatrip" aria-label="git" target="_blank">
      <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-github-icon-svg-download-png-10919025.png?f=webp&w=512"
          width="30"
          height="50"
          className="p-1 rounded-xl hover:shadow-lg hover:shadow-gray-500"
          alt="git"
        />
        </a>  
      </div>
    </div>
  );
};

export default ConnectionTools;
