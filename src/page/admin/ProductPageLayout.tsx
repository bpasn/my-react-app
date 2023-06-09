import { Alert, Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import { Crumbs, CrumbsA, CrumbsLi, CrumbsUl, PageHeader, PageTitle, PageTitleH3 } from './ecommerce/addProduct/AddProductStyle';
import { useAppSelector } from '../../redux/hook';
import LoadingPage from '../../components/LoadingPage';

type Props = {
    titleHeader?: string;
    mainMenu?: string;
    subMenu?: string[];
    children?: string | JSX.Element | JSX.Element[] | React.ReactNode;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: "14px",
                    border: '1px solid #ced4da',
                    '&:hover': {
                        backgroundColor: "#fff",
                        color: '#3232b7',
                        boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
                        willChange: 'opacity, transform',
                        transition: 'all 0.3s ease-out',

                        border: '1px solid #ced4da !improtant',
                        webkitTransition: 'all 0.3s ease-out',
                    },
                    "& $notchedOutline": {
                        borderColor: "purple"
                    },
                    "&:hover $notchedOutline": {
                        borderColor: "red"
                    },
                    "& $focused $notchedOutline": {
                        borderColor: "purple"
                    }
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        height: "calc(1.5em + .75rem + 10px)",
                        borderRadius: "30px"
                    },
                }
            },
        },
    }
})
const ProductPageLayout: React.FC<Props> = (props: Props) => {
    const { severity, message, errorStatus } = useAppSelector(state => state.Error)
    const { loading } = useAppSelector(state => state.LoadingProgress)
    return (
        <ThemeProvider theme={theme} >
            <Box sx={{
                padding: "0 30px",

                maxWidth: "none !improtant",
                '& input, select , textarea, :focus': {
                    outline: 'none !important',
                    color: "#495057",
                    backgroundColor: '#fff',
                    borderClor: '#80bdff',
                }
            }}>
                <PageHeader>
                    <PageTitle>
                        <PageTitleH3>
                            {props.titleHeader}
                        </PageTitleH3>
                        <Crumbs>
                            <CrumbsUl>
                                <CrumbsLi>
                                    <CrumbsA>
                                        <i className="fa fa-home"></i>
                                    </CrumbsA>
                                </CrumbsLi>
                                <CrumbsLi>
                                    <CrumbsA>
                                        {props.mainMenu}
                                    </CrumbsA>
                                </CrumbsLi>
                                {props.subMenu?.map((sub: string, index: number) => {
                                    return <CrumbsLi key={sub + index}>
                                        <CrumbsA sx={{
                                            
                                            fontWeight: `${props.subMenu?.length === index + 1 ? 700 : 'normal'} `
                                        }}>
                                            {sub}
                                        </CrumbsA>
                                    </CrumbsLi>
                                })}

                            </CrumbsUl>
                        </Crumbs>
                    </PageTitle>
                </PageHeader>
                {errorStatus ?
                    (<Stack sx={{ width: '100%' }} mb={2} spacing={2} >
                        <Alert sx={{
                            alignItems: "center",
                            fontSize: "14px",
                            fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                            fontWeight: 600
                        }} severity={severity}>{message}</Alert>
                    </Stack>)
                    : ''
                }
                {loading ? <LoadingPage /> : ''}
                {/* content */}
                {props.children}
            </Box>
        </ThemeProvider>
    )
}

export default ProductPageLayout