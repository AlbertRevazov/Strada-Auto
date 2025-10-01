import { directoryList } from '../../data';
import { Card } from '../../common/card';
import './styles.css';

const Directory = () => {
    return (
        <section id="directory" className="directory_root">
            <p className="directory_title">Каталог автомобилей</p>
            <article className="directory_list">
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
            </article>
        </section>
    );
};
export default Directory;
