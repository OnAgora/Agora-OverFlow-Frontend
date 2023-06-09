
import cn from 'classnames'

export default function Table( {cols, rows, className='', onRowClick=()=>{}} ) {
    return (
        <table className={cn('border-grey border-b w-full', className)}>
            <thead>
                <tr className='px-[20px]'>
                    {
                        cols[0].type != 'id' &&
                        <th className='text-left py-[12px] pl-[20px] pr-[4px]'>
                            #
                        </th>
                    }
                    {
                        cols.map((col, key) => (
                            <th key={key} className='text-left py-[12px] px-[4px]'>
                            {
                                col.text
                            }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className='relative'>
                {
                    rows.map((row, key) => (
                        <tr key={key} className='border-grey border-t cursor-pointer hover:bg-[#eee]' onClick={() => onRowClick(row)}>
                            {
                                cols[0].type != 'id' &&
                                <td className='text-left py-[12px] pl-[20px] pr-[4px]'>
                                    {key + 1}
                                </td>
                            }
                            {
                                cols.map((col, key) => (
                                    <td className='py-[12px] px-[4px]' key={key} >
                                        {
                                            typeof col.value == 'string' 
                                                ?
                                                (
                                                    typeof row[col.value] == 'object' && row[col.value]?.value?
                                                        row[col.value].value :
                                                        row[col.value]
                                                )
                                                :
                                                col.value(row)
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )   
}
