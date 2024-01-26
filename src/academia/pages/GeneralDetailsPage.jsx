import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch }      from "../../shared/hooks";
import { GeneralLayout } from "../../shared/Layout";
import { EmptyResults }  from "../../shared/components";
import { cloneElement }  from "react";



export const GeneralDetailsPage = ({ url='', children }) => {

    const { id }   = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useFetch(`${url}/${id}`);
    const info = data?.results[0];
    console.log( data )
    
    const navigateBack = () => navigate(-1);

    return (
        <GeneralLayout>
            <Link className="btn" onClick={ navigateBack }>
                <i className="bi bi-arrow-left-short"></i>
                Back to List
            </Link>

            <div className="col-8 offset-2">

                { isLoading && <div>Loading...</div> }

                { 
                    !isLoading && ( data?.results.length === 0 ) 
                        ? (<EmptyResults message="No se encontro un profesor con ese ID"/>)
                        :  ( cloneElement( children,  { info } ) )
                }
                
            </div>
        </GeneralLayout>
    );
}

