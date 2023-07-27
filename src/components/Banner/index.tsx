import { BannerFooterWrapper, BannerFooterWrapperItem, BannerHeaderWrapper, BannerImageWrapper, BannerWrapper, DescriptionWrapper } from "./styles";
import BannerCoffeeImage from '../../assets/CoffeeDeliveryBannerImage.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import backBannerLayer from '../../assets/backBannerLayer.png'

export function Banner() {
    return(
        <BannerWrapper>
            <img className="bannerBackLayer" src={backBannerLayer} alt="" />
            <DescriptionWrapper>
                <BannerHeaderWrapper>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </BannerHeaderWrapper>

                <BannerFooterWrapper>
                    <BannerFooterWrapperItem $BackColor='yellowDark'>
                        <span><ShoppingCart color='#FFF' size={16} weight="fill" /></span>
                        <p>Compra simples e segura</p>
                    </BannerFooterWrapperItem>
                    <BannerFooterWrapperItem $BackColor='yellow'>
                        <span><Timer color='#FFF' size={16} weight="fill" /></span>
                        <p>Entrega rápida e rastreada</p>
                    </BannerFooterWrapperItem>
                    <BannerFooterWrapperItem $BackColor='baseText'>
                        <span><Package color='#FFF' size={16} weight="fill" /></span>
                        <p>Embalagem mantém o café intacto</p>
                    </BannerFooterWrapperItem>
                    <BannerFooterWrapperItem $BackColor='purple'>
                        <span><Coffee color='#FFF' size={16} weight="fill" /></span>
                        <p>O café chega fresquinho até você</p>
                    </BannerFooterWrapperItem>
                </BannerFooterWrapper>

            </DescriptionWrapper>

            <BannerImageWrapper>
                <img src={BannerCoffeeImage} alt="" />
            </BannerImageWrapper>
        </BannerWrapper>
    );
}