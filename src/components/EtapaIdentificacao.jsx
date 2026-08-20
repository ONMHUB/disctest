export default function EtapaIdentificacao({ dadosUser, setDadosUser, onAvancar, erro }) {
    return (
        <form onSubmit={onAvancar} className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-600 text-center">Avaliação de Perfil DISC</h2>
            <p className="text-sm text-gray-500 text-center">Identificação inicial do colaborador</p>
            
            <div>
                <label className="block text-sm font-medium mb-1">Nome Completo:</label>
                <input 
                    type="text" 
                    value={dadosUser.nome} 
                    onChange={e => setDadosUser({...dadosUser, nome: e.target.value})} 
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none" 
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Função / Cargo:</label>
                <input 
                    type="text" 
                    value={dadosUser.cargo} 
                    onChange={e => setDadosUser({...dadosUser, cargo: e.target.value})} 
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none" 
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Setor Principal:</label>
                <select 
                    value={dadosUser.setor} 
                    onChange={e => setDadosUser({...dadosUser, setor: e.target.value})} 
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                >
                    <option value="Vendas">Vendas</option>
                    <option value="Caixa">Caixa</option>
                    <option value="Estoque">Estoque</option>
                    <option value="Gerência">Gerência</option>
                    <option value="Apoio">Apoio</option>
                </select>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 h-28 overflow-y-auto border">
                Compreendo que a avaliação tem caráter de desenvolvimento profissional e organizacional, vinculada à consultoria prestada por Maxi Silva. Autorizo a aplicação e elaboração do perfil comportamental.
            </div>
            <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input 
                    type="checkbox" 
                    checked={dadosUser.concordo} 
                    onChange={e => setDadosUser({...dadosUser, concordo: e.target.checked})} 
                    className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4" 
                />
                <span>Li e concordo com os termos de aplicação.</span>
            </label>

            {erro && <p className="text-red-500 text-sm text-center font-medium">{erro}</p>}

            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-lg transition duration-200">
                Iniciar Questionário
            </button>
        </form>
    );
}
