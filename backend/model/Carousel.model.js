import mongoose from 'mongoose';

const carouselSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: String,
    description: String,
    img: { type: String, required: true } // Image URL
});

const CarouselModel = mongoose.model('Carousel', carouselSchema);

export default CarouselModel;
