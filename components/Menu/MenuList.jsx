import MenuItem from "./MenuItem";

export default function MenuList({ fileTreeData }) {
  return (
    <>
      {fileTreeData.length > 0 ? (
        fileTreeData.map((fileFolderItem) => (
          <MenuItem key={fileFolderItem.name} fileFolderItem={fileFolderItem} />
        ))
      ) : (
        <p>No items available</p>
      )}
    </>
  );
}
