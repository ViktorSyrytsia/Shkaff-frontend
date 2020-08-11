import React, {useState} from 'react';
import ImgsViewer from 'react-images-viewer';

const ImageViewer = ({images}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currImg, setCurrImg] = useState(0);

    const imagesSet = images.map( img => ({src: img.link}))

    const openImage = (idx) => {
        setIsOpen(true);
        setCurrImg(idx);
    };

    const primaryImage = (
        <img src={images[0].link} alt='blah' onClick={() => openImage(0)}/>
    )

    const sideImages = (
        images.slice(1).map((img, idx) => (
            <img
                src={img.link}
                key={idx}
                alt='img'
                onClick={() => openImage(idx + 1)}
            />
        )))

    return (
        <>
            <ImgsViewer
                imgs={imagesSet}
                currImg={currImg}
                showThumbnails
                isOpen={isOpen}
                onClickPrev={() => setCurrImg((currImg) => currImg - 1)}
                onClickNext={() => setCurrImg((currImg) => currImg + 1)}
                onClickThumbnail={(index) => setCurrImg(index)}
                onClose={() => setIsOpen(false)}
                closeBtnTitle={'Закрити'}
                leftArrowTitle={'Назад'}
                rightArrowTitle={'Вперед'}
            />
            <div className='product-detail__item__images'>
                {primaryImage}
                {sideImages}
            </div>
        </>
    );
};

export default ImageViewer;
