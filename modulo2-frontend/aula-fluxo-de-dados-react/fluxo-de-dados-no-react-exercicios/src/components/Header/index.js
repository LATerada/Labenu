import { ProfileName, ProfilePhoto, TitleHeader} from './styled'


export const Header = ({profile}) => {
    return(
        <TitleHeader>
            <ProfilePhoto src={profile.url} alt=""/>
            <ProfileName>{profile.name}</ProfileName>
            Insta4
        </TitleHeader>
    )
}