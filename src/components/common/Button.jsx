import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPlus, mdiFileEditOutline, mdiDownload } from '@mdi/js';

export default function Button({ label, onClick, className, type }) {

const icons = {
  "add": <Icon path={mdiPlus} size={1} />,
  "edit": <Icon path={mdiFileEditOutline} size={1} />,
  "download": <Icon path={mdiDownload} size={1} />,
  "delete": <Icon path={mdiTrashCanOutline} size={1} />
}

    return (
        <button className={className} onClick={onClick} type={type}>
          {label}
          {icons[className]}
        </button>
    );
  }