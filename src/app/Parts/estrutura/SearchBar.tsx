import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
    return (
        <>
            <form method="get" action="/pesquisar">
                <button type="submit" className="bg-none border-none absolute right-0 p-4">
                    <FontAwesomeIcon className="text-xl fill-red-700" icon={faMagnifyingGlass} />
                </button>
                <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                <input className="border-gray bg-white text-black  border w-full py-3 px-5 shadow-md rounded-lg ui-autocomplete-input" name="s" placeholder="Digite o curso que deseja" type="text" />
            </form>
        </>
    );
}