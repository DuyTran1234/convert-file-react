import { Container } from "@mui/system";
import { introduceList } from "../shared/introduceList";
import IntroduceBox from "./IntroduceBox";

export default function IntroduceContainer() {
    return <Container
        maxWidth={`100%`}
        style={{ padding: 0 }}
        sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignContent: 'center',
        }}
    >
        {introduceList.map((value) => {
            return <IntroduceBox icon={value.icon} caption={value.caption} sub={value.sub} />
        })}

    </Container>
}