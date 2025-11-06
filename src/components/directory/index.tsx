import { directoryList } from '../../data';
import { Card } from '../../common/card';
import './styles.css';

const Directory = () => {
    return (
        <section className="directory">
            <h2 className="directory__title">Каталог автомобилей</h2>
            <div className="directory__list">
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
        </section>
    );
};

export default Directory;
