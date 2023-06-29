const goToParentFolder = (currentPath) => {
  const separatorIndex = currentPath.lastIndexOf('/');
  if (separatorIndex === -1) {
    console.log("Bu bir kök dizindir. Geri gidilecek bir üst klasör yok.");
    return;
  }
  const parentPath = currentPath.slice(0, separatorIndex);
  console.log("Geri gidilen klasör:", parentPath);
  // Diğer işlemleri buraya ekleyebilirsiniz.
};
