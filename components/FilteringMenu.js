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
          style={{ marginRight: '10px' }}
        />
      ) : (
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon="list"
          onClick={() => onChange('view', { list: !filter.view.list })}
          style={{ marginRight: '10px' }}
        />
      )}
      {filter.date.asc ? (
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon="sort-numeric-up"
          onClick={() => onChange('date', { asc: !filter.date.asc })}
        />
      ) : (
        <FontAwesomeIcon
          className="clickable hoverable"
          size="2x"
          icon="sort-numeric-down"
          onClick={() => onChange('date', { asc: !filter.date.asc })}
        />
      )}
    </div>
  );
};

export default FilteringMenu;
