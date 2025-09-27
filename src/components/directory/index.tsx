import { directoryList } from '../../data';
import { Card } from '../../common/card';
import './styles.css';

const Directory = () => {
    return (
        <div id="directory" className="directory_root">
            {directoryList.map((dir) => (
                <Card
                    key={dir.id}
                    type="directory"
                    img={dir.src}
                    title={dir.title}
                    acceleration={dir.acceleration}
                    drive={dir.drive}
                    gearbox={dir.gearbox}
                    power={dir.power}
                    volume={dir.volume}
                />
            ))}
        </div>
    );
};
export default Directory;
