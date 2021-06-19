import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      {filter.view.list ? (
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon="border-all"
          onClick={() => onChange('view', { list: !filter.view.list })}
        />
      ) : (
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon="list"
          onClick={() => onChange('view', { list: !filter.view.list })}
        />
      )}
    </div>
  );
};

export default FilteringMenu;
